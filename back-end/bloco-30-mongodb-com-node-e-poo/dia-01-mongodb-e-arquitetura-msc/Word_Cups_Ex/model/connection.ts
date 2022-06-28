import { connect } from "mongoose"

const  createConnection = (URI: string = 'mongodb://localhost:27017/world_cups') => {
  connect(URI);
}

export default createConnection;