
export const getlisttabledata = () => {
  if (!localStorage["listtabledata"]) {
    localStorage["listtabledata"] = "[]";
  }
  let listtabledata = localStorage["listtabledata"];
  listtabledata = JSON.parse(listtabledata);
  return listtabledata;
};
  
  export const addtable_data = (table_data) => {
    const listtabledata = getlisttabledata();
    listtabledata.push(table_data);
  localStorage["listtabledata"] = JSON.stringify(listtabledata);
};
  
export const removetable_data = (id) => {
  console.log(id);
    let listtabledata = getlisttabledata();
    listtabledata = listtabledata.filter((table_data) => table_data.id !== id);
    localStorage["listtabledata"] = JSON.stringify(listtabledata);
  };
  
  export const gettable_dataById = (id) => {
    const listtabledata = getlisttabledata();
    const table_data = listtabledata.find((table_data) => table_data.id === id);
    return table_data;
  };
  
export const edittable_data = (id, newtable_data) => {
  let listtabledata = getlisttabledata();
  listtabledata = listtabledata.filter((table_data) => table_data.id !== id);
  listtabledata.push(newtable_data);
  localStorage["listtabledata"] = JSON.stringify(listtabledata);
};