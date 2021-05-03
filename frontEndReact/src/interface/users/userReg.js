import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserLog from './userLog'

const UserReg=(props)=>{
    
    let [nam, changeName] = useState('');
    let [fon, changeFone]= useState('');
    let [month, changeMonth]= useState('');
    let [day, changeDay]= useState('');
    let [year, changeYear]= useState('');
    let [pass, changePass]= useState('');
    let [userN, changeUname]= useState('');
    let [reg, changeReg] = useState(false);

    


    
        useEffect(()=>{
        console.log("hello"); 
        
        }, [])

        
       const handleSet=(event)=>{
            //let checkName= event.target.name==="userName";
            let checkFname= event.target.name==="fName";
            let checkFone = event.target.name==="fone";
           let checkMonth= event.target.name ==="month";
            let checkDay = event.target.name ==="day";
            let checkYear = event.target.name === "year";
            let checkPass = event.target.name ==="pass";
            let checkUname = event.target.name ==="uName";

    
             if (checkFname) {
                 //x = (event.target.value);
                changeName(event.target.value);
                //console.log(event.target.value);
            }
            else if(checkUname){
                //k= (event.target.value);
                changeUname(event.target.value);
                //console.log(event.target.value);
            }
            
            else if(checkFone){
                //k= (event.target.value);
                changeFone(event.target.value);
                //console.log(event.target.value);
            }
            else if(checkMonth){
            // y= (event.target.value);
            changeMonth(event.target.value);
            }
            else if(checkDay){
                // y= (event.target.value);
                changeDay(event.target.value);
                }
            
                else if(checkYear){
                    // y= (event.target.value);
                    changeYear(event.target.value);
                    }
            
             else if(checkPass){
                        // y= (event.target.value);
            changePass(event.target.value);
            }
        }

        const handleSubmit=(e)=>{
            e.preventDefault();
            
            let m= {name:nam, fone:fon, day:day, month:month , year:year, password:pass, username:userN};
                
                // let m = new FormData();
                // m.append("fone",  fon);
                // m.append("name",nam);
                // m.append("year",year);
                
                 console.log(m)
            
            if(nam != '' && fon !='' && day!='' && year !='' && month !=''&& pass !='' && userN !=''){
                //axios.post('http://localhost:5000',JSON.stringify(m))
                        axios({
                                method: "post",
                                url: "http://localhost:5000/register",
                                data: m,
                                // headers: { 
                                // 'Content-Type': 'multipart/form-data'
                                //  }, 
                             })
        
                        .then(response=>{console.log(response.data); 
                            changeReg(!reg)
                            document.getElementById("modalbtn").click();
                            
                         }).catch(err=>console.log(err));
    
            }else{
                console.log('please fill all require field')
            }
        };

        const handleLog = ()=>{
            

        
            const m = {
              username: userN,
              password: pass
        };
            console.log(m)
        axios.post('http://localhost:5000/login',m)
        .then(response=>{console.log(response.data); 
            //handleCheck(response.data);
             //handleMyLog(response.data);
             //handleCheck(response.data);
             props.history.push('/profile');
        }
            
    )
        .catch(err=>console.log(err));
            
            
        }
        

    
    
    
        //console.log(props)
   
    return(
        <React.Fragment>
            
            {reg?
            <div>
                <button type="button" hidden={true} className="btn btn-primary" id='modalbtn'  data-toggle="modal" data-target="#myModal">
                
                </button>

                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

     
                            <div className="modal-header">
                                <h4 className="modal-title">Modal Heading</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>

     
            <div className="modal-body">
                     CONGRATULATION YOU HAVE SUCCESFULLY REGISTER
            </div>

      
            <div className="modal-footer">
                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={()=>handleLog()}>Proceed to login</button>
            </div>

    </div>
  </div>
</div>
            </div>
            
            

            :
            <div className="row">
            <div className="col-sm-5 mx-auto">
                <div className="card">
                    <div className="card-body">
                        <div style={{float:'right'}}>
                            <span className="fab fa-twitter fa-2x" style={{marginRight:'140px',color:'#1A91DA'}}></span>
                            <button className="btn btn-sm btn-primary" style={{backgroundColor:'#1A91DA',  borderRadius:'50px'}}>Next</button>
                        </div>
                    {/* <h5 className="card-title">Create your  account</h5> */}
                    <form className="form-group" >
                            <input type="text" className="form-control m-2 " name="fName" onChange={handleSet} placeholder="Name" />
                            <input type="text" className="form-control m-2 " name="uName" onChange={handleSet} placeholder="Username" />
                            <input type="text" className="form-control m-2 " name="fone" onChange={handleSet} placeholder="Phone" />
                            <input type="text" className="form-control m-2 " name="pass" onChange={handleSet} placeholder="Password" />
                            <button className="btn text-primary"> use email instead</button><br/>
                            Date of birth<br/>
                            
<span className="input-group">
    <select className="form-control m-2 w-25" onChange={handleSet}  name="month">
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
 </select> 
 <select className="form-control m-2 w-25" onChange={handleSet} name="day">
      <option value="01">1</option>
      <option value="02">2</option>
      <option value="03">3</option>
      <option value="04">4</option>
      <option value="05">5</option>
      <option value="06">6</option>
      <option value="07">7</option>
      <option value="08">8</option>
      <option value="09">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      <option value="16">16</option>
      <option value="17">17</option>
      <option value="18">18</option>
      <option value="19">19</option>
      <option value="20">20</option>
      <option value="21">21</option>
      <option value="22">22</option>
      <option value="23">23</option>
      <option value="24">24</option>
      <option value="25">25</option>
      <option value="26">26</option>
      <option value="27">27</option>
      <option value="28">28</option>
      <option value="29">29</option>
      <option value="30">30</option>
      <option value="31">31</option>
 </select>
 <select className="form-control m-2 w-25" onChange={handleSet} name="year">
      <option value="2030">2030</option>
      <option value="2029">2029</option>
      <option value="2028">2028</option>
      <option value="2027">2027</option>
      <option value="2026">2026</option>
      <option value="2025">2025</option>
      <option value="2024">2024</option>
      <option value="2023">2023</option>
      <option value="2022">2022</option>
      <option value="2021">2021</option>
      <option value="2020">2020</option>
      <option value="2019">2019</option>
      <option value="2018">2018</option>
      <option value="2017">2017</option>
      <option value="2016">2016</option>
      <option value="2015">2015</option>
      <option value="2014">2014</option>
      <option value="2013">2013</option>
      <option value="2012">2012</option>
      <option value="2011">2011</option>
      <option value="2010">2010</option>
      <option value="2009">2009</option>
      <option value="2008">2008</option>
      <option value="2007">2007</option>
      <option value="2006">2006</option>
      <option value="2005">2005</option>
      <option value="2004">2004</option>
      <option value="2003">2003</option>
      <option value="2002">2002</option>
      <option value="2001">2001</option>
      <option value="2000">2000</option>
      <option value="1999">1999</option>
      <option value="1998">1998</option>
      <option value="1997">1997</option>
      <option value="1996">1996</option>
      <option value="1995">1995</option>
      <option value="1994">1994</option>
      <option value="1993">1993</option>
      <option value="1992">1992</option>
      <option value="1991">1991</option>
      <option value="1990">1990</option>
      <option value="1989">1989</option>
      <option value="1988">1988</option>
      <option value="1987">1987</option>
      <option value="1986">1986</option>
      <option value="1985">1985</option>
      <option value="1984">1984</option>
      <option value="1983">1983</option>
      <option value="1982">1982</option>
      <option value="1981">1981</option>
      <option value="1980">1980</option>
      <option value="1979">1979</option>
      <option value="1978">1978</option>
      <option value="1977">1977</option>
      <option value="1976">1976</option>
      <option value="1975">1975</option>
      <option value="1974">1974</option>
      <option value="1973">1973</option>
      <option value="1972">1972</option>
      <option value="1971">1971</option>
      <option value="1970">1970</option>
      <option value="1969">1969</option>
      <option value="1968">1968</option>
      <option value="1967">1967</option>
      <option value="1966">1966</option>
      <option value="1965">1965</option>
      <option value="1964">1964</option>
      <option value="1963">1963</option>
      <option value="1962">1962</option>
      <option value="1961">1961</option>
      <option value="1960">1960</option>
      <option value="1959">1959</option>
      <option value="1958">1958</option>
      <option value="1957">1957</option>
      <option value="1956">1956</option>
      <option value="1955">1955</option>
      <option value="1954">1954</option>
      <option value="1953">1953</option>
      <option value="1952">1952</option>
      <option value="1951">1951</option>
      <option value="1950">1950</option>
      <option value="1949">1949</option>
      <option value="1948">1948</option>
      <option value="1947">1947</option>
      <option value="1946">1946</option>
      <option value="1945">1945</option>
      <option value="1944">1944</option>
      <option value="1943">1943</option>
      <option value="1942">1942</option>
      <option value="1941">1941</option>
      <option value="1940">1940</option>
      <option value="1939">1939</option>
      <option value="1938">1938</option>
      <option value="1937">1937</option>
      <option value="1936">1936</option>
      <option value="1935">1935</option>
      <option value="1934">1934</option>
      <option value="1933">1933</option>
      <option value="1932">1932</option>
      <option value="1931">1931</option>
      <option value="1930">1930</option>
      <option value="1929">1929</option>
      <option value="1928">1928</option>
      <option value="1927">1927</option>
      <option value="1926">1926</option>
      <option value="1925">1925</option>
      <option value="1924">1924</option>
      <option value="1923">1923</option>
      <option value="1922">1922</option>
      <option value="1921">1921</option>
      <option value="1920">1920</option>
      <option value="1919">1919</option>
      <option value="1918">1918</option>
      <option value="1917">1917</option>
      <option value="1916">1916</option>
      <option value="1915">1915</option>
      <option value="1914">1914</option>
      <option value="1913">1913</option>
      <option value="1912">1912</option>
      <option value="1911">1911</option>
      <option value="1910">1910</option>
      <option value="1909">1909</option>
      <option value="1908">1908</option>
      <option value="1907">1907</option>
      <option value="1906">1906</option>
      <option value="1905">1905</option>
      <option value="1904">1904</option>
      <option value="1903">1903</option>
      <option value="1902">1902</option>
      <option value="1901">1901</option>
      <option value="1900">1900</option>
 </select>
</span>


                            
                    <button type="submit" name="submit" className="btn btn-primary m-2" onClick={handleSubmit} >Register</button> 
                   
                    </form>
                    </div>



                </div>

            </div>

        </div>}
        
        </React.Fragment>
    )
}
export default UserReg;