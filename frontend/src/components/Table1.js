
import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

export class Table1 extends Component{

  constructor (props){
    super(props)
    this.state = {proj:[]}
  }

  componentDidMount(){
    this.refreshlist();
  }
  
  refreshlist(){
    this.setState({
      proj:[{'Name': "ProjectName", 'Value':"Silver Tower"},
      {'Name': "Budget", 'Value':10000},
      {'Name': "Duration", 'Value':24 },
      {'Name': "Expected First Payment", 'Value':593472873},
      {'Name': "Expected last Payment", 'Value':13435488},
      {'Name': "Peak Interval", 'Value':12},
     ]

    })
  }

  render(){
    const{proj}=this.state;

    return(
      <Table className ="mt-2" striped bordered hover size = "sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            
          </tr>
        </thead>
        <tbody>
          {proj.map(dep=>
            <tr key ={dep.Name}>
            <td>{dep.Name}</td>
            <td>{dep.Value}</td>
            </tr>
            )}    
        </tbody>
      </Table>
    )
  }  
}

export default Table1;