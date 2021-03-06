import "./App.css";
import {  Container } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WishList from "./pages/WishList";
import AddWish from "./pages/AddWish";
import EditWish from "./pages/EditWish";

// export default class App extends React.Component
// {
//   constructor(props) {
//     super(props)
//     this.state = {
//       wishes:null
//     }
//   }

//   componentDidMount(){

//     fetch("http://127.0.0.1:8000/api/wishes")
//           .then((response) =>{
//             if(response.ok){
//               return response.json()
//             }
//           })
//           .then ((data) => {
//             this.setState({wishes:data.data}
//              )
//           })
//           .then((data1) => console.log('dddddd',data1));

//   }

// onAddWish =() =>{
// alert('hh')
//   }
//   render(){
//     return (
//       <Container maxWidth='lg'  style={{ backgroundColor: '#cfe8fc' }} >
//         <Button text='Add' color='green' onClick={this.onAddWish}/>
//         <AddWish />
//         <WishList title='hh' wishes={this.state.wishes}/>

//       </Container>
//     )

//   }
// }

const App = () => {
  const [wishes, setWishes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchWishes();
      if (data) setWishes(data);
    };
    getData();
  }, []);

  const fetchWishes = async () => {
    const result = await fetch("http://127.0.0.1:8000/api/wishes");
    const data = await result.json();
    return data.data;
  };

  // Add wish
  const addWishHandler = async (wish) => {
    const request = {
      ...wish,
    };
    const response = await fetch("http://127.0.0.1:8000/api/wishes", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(request),
    });
    const data = await response.json();
    setWishes([...wishes, data.data]);
  };

  // Delete wish
  const deleteWishHandler = async (id) => {
    fetch(`http://127.0.0.1:8000/api/wishes/${id}`, { method: "DELETE" });
    setWishes(wishes.filter((wish) => wish.id !== id));
  };

  // Update wish

  const updateWishHandler = async (wish) => {
    const request = {
      ...wish,
    };
    const response = await fetch(
      `http://127.0.0.1:8000/api/wishes/${wish.id}`,
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(request),
      }
    );
    const data = await response.json();
    console.log(data.data);
    setWishes(
      wishes.map((item) => {
        return item.id === data.data.id ? { ...data.data } : item;
      })
    );
  };

  const getSearchResults = (value) => {
    setSearchText(value);
    if (searchText !== "") {
      const newWishList = wishes.filter((wish) => {
        return Object.values(wish)
          .join(" ")
          .toLowerCase()
          .includes(searchText.toLowerCase());
      });
      setSearchResults(newWishList);
    } else {
      setSearchResults(wishes);
    }
  };
  return (
    <Container maxWidth="lg" fixed style={{ backgroundColor: "#cfe8fc" }}>
      {/* <Container maxWidth='lg' fixed style={{ backgroundColor: '#cfe8fc' }}> */}
      {/* <AddWish addWishHandler={addWishHandler} showAddWish /> */}
      {/* {wishes.length > 0 ? (
        <WishList
          title="WishList"
          wishes={wishes}
          onDelete={deleteWishHandler}
        />
      ) : (
        "??nselisten er tom"
      )} */}
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <WishList
                {...props}
                wishes={searchText.length < 1 ? wishes : searchResults}
                searchText={searchText}
                onDelete={deleteWishHandler}
                getSearchResults={getSearchResults}
              />
            )}
          />
          <Route
            path="/add"
            exact
            render={(props) => (
              <AddWish {...props} addWishHandler={addWishHandler} />
            )}
          />

          <Route
            path="/edit/:id"
            exact
            render={(props) => (
              <EditWish {...props} onUpdate={updateWishHandler} />
            )}
          />
        </Switch>
      </Router>
    </Container>
  );
};
export default App;
