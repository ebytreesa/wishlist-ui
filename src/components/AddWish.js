import React from 'react'

const AddWish = () => {
    return (
<form className='add-form'>
    <div className='form-controller'>
        <label>Title</label>
        <input type='text' placeholder='Add wish'/>
    </div>
    <div className='form-controller'>
        <label>Description</label>
        <input type='text' placeholder='Add description'/>
    </div>
    <div className='form-controller'>
        <label>Link</label>
        <input type='text' placeholder='Add link'/>
    </div>
    <input type='submit' value='Save wish'/>


</form>
    )
}

export default AddWish
