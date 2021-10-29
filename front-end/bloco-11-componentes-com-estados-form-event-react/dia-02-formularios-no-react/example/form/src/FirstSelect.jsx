import {Component} from 'react'

export default class FirstSelect extends Component {
  render() {
    const { handleChange} = this.props;
    return(
      <div className="form-group col-md-2 mb-4">
        <label htmlFor="select-1"> <h5 className="fw-bolder">Use select 1</h5></label>
        <select 
          className="form-control" 
          id="select-1" 
          name="select1"
          onClickCapture={handleChange} 
        >
          <option>opt-1</option>
          <option>opt-2</option>
          <option>opt-3</option>
          <option>opt-4</option>
          <option>opt-5</option>
        </select>
      </div>
    )
  }
}