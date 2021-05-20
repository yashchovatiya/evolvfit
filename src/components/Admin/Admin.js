import React, { useRef } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import "./Admin.css";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectData } from "../../redux/dish/dish.selector";

const Admin = ({ data }) => {
    const rowData = data;
    console.log(rowData);
    const gridApi = useRef();
   const  onGridReady = params => {
       gridApi.current= params.api;
        
      };
      
     
    return (
        <div className="ag-theme-alpine" id="table" >
            <h1>Admin page</h1>
            <h3>Details of dishes</h3>
            <br></br>
            <div></div>
            <br></br>
            <AgGridReact onGridReady={onGridReady}
                rowData={data}>
                <AgGridColumn field="id" sortable={true} filter={true} checkboxSelection={true} editable={true}></AgGridColumn>
                <AgGridColumn field="name" sortable={true} filter={true}  editable={true}></AgGridColumn>
                <AgGridColumn field="imageUrl" sortable={true} filter={true} editable={true}></AgGridColumn>
                <AgGridColumn field="protin" sortable={true} filter={true} editable={true}></AgGridColumn>
                <AgGridColumn field="carbs" sortable={true} filter={true} editable={true}></AgGridColumn>
                <AgGridColumn field="fats" sortable={true} filter={true} editable={true}></AgGridColumn>
            </AgGridReact>
        </div>

    );
};

const mapStateToProps = createStructuredSelector({
    data: selectData
})
export default connect(mapStateToProps)(Admin);


