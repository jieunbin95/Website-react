import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom'
import ProductAll from './Page/ProductAll'
import Login from './Page/Login'
import Navbar from './Component/Navbar'
import {useEffect,useState} from 'react'
import PrivateRoute from './Route/PrivateRoute'

//1.전체상품페이지,로그인페이지,상품상세페이지가 있다
//1-1 네비게이션 바 만들기(어떤 페이지를 눌러도 상단에 고정되어있다)
//2.전체상품페이지에서는 전체 상품을 볼 수 있다
//3.로그인버튼을 누르면 로그인페이지가 나온다
//4.상품디테일버튼을 눌렀을 때 로그인이 안 되어있는 경우 로그인 페이지가 나온다
//5.로그인이 되어있는 경우에는 상품디테일페이지가 나온다
//6.로그아웃 버튼을 클릭하면 로그아웃이 된다.
//7.로그아웃을 하면 상품디테일페이지를 볼 수 없다, 다시 로그인 페이지가 보인다
//8. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인 글씨가 보인다.
//9. 상품을 검색할 수 있다

function App() {
  let [authenticate,setAuthenticate]=useState(false)

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
     <Routes>
      <Route path='/' element={<ProductAll/>}/>
      <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
      <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>}/>
      {/* 상품디테일페이지는 오직 로그인한 사람만 보여져야 하기 때문에 PrivateRoute로 감싸준다 */}
     </Routes>
    </div>
  );
}

export default App;
