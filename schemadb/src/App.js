import React,{useState} from 'react';
const ImageTable = ({selectedImages})=>{
  return(
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{border:'1px solid #3824ee',padding:'8px',textAlign:'center',backgroundColor:'lightblue'}}>Image</th>
            <th style={{border:'1px solid #3824ee',padding:'8px',textAlign:'center',backgroundColor:'lightblue'}}>Name</th>
          </tr>
        </thead>
        <tbody>
          {selectedImages.map((Image,index)=>(
            <tr key={index}>
              <td>
                <img src={Image.src} alt={Image.alt} style={{maxWidth:'100px',maxHeight:'100px'}}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  };
  const App = () => {
    const [selectedImages, selectedImages] = useState([
      
    ]);
  }
