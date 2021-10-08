import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Component} from 'react'

class App extends Component {
  constructor() {
    super();

    this.state = {
      myTextArea: '',
      select1: '',
      select2: '',
      share: false,
      agree: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target}) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="m-lg-3" onSubmit={this.handleSubmit}>
        <fieldset className="fd">
        <div className="form-row"> 
          <div className="form-group col-md-2 mb-4">
            <label htmlFor="select-1"> <h5 className="fw-bolder">Use select 1</h5></label>
            <select 
              className="form-control" 
              id="select-1" 
              name="select1"
              onClickCapture={this.handleChange}>
              <option>opt-1</option>
              <option>opt-2</option>
              <option>opt-3</option>
              <option>opt-4</option>
              <option>opt-5</option>
            </select>
          </div>
          <div className="form-group col-md-2 mb-4"> 
            <label htmlFor="select-2"> <h5 className="fw-bolder">Use select 2</h5></label>
            <select 
              className="form-control" 
              id="select-2" 
              name='select2'
              onClickCapture={this.handleChange}>
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
              <option>option 5</option>
            </select>
          </div>
        </div>
        </fieldset>
        <div className="form-group col-md-7">
          <label htmlFor="my-text-area"> <h5 className="fw-bolder"> Conte mais sobre você </h5> </label>
          <textarea 
            className="form-control" 
            name="myTextArea"
            rows="8"
            value={this.state.myTextArea}
            onChange={this.handleChange}
            />
        </div>

        <div className="form-check mt-2">
          <input 
            className="form-check-input"
            type="checkbox"
            id="checkbx"
            name="share"
            onClick={this.handleChange}
            />
          <label htmlFor="checkbx" className="form-check-label">
            Concorda em compartilhar suas informações.
          </label>
        </div>
        <div className="form-check mt-2">
          <input 
            className="form-check-input"
            type="checkbox"
            id="checkbx"
            name="agree"
            onClick={this.handleChange}
            />
          <label htmlFor="checkbx" className="form-check-label">
            Está de acordo com nosso termo de uso.
          </label>
        </div>
        <button type="submit" className="btn-info btn-lg mt-3">Enviar</button>
      </form>
    ) 
  }
}
;

export default App;
