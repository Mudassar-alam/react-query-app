import logo from './logo.svg';
import './App.css';
import { QueryClient , QueryClientProvider} from '@tanstack/react-query'
import Home from './components/Home';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import PostList from './components/Posts/PostList';
import Singlepost from './components/Posts/Singlepost';
import Grid from './components/GridSystem/Grid';
import ContextCheck from './components/ContextCheck';
import Practice from './components/practice/practiceone';
import NewForm from './components/crud/simple';
function App() {


  return (
    
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<PostList />} exact   /> */}
      {/* <Route path='/posts/:id' element={<Singlepost />} /> */}
      {/* <Route path='/' element={<Grid />}/> */}
      
      {/* <Route path='/' element={<ContextCheck />} /> */}
      {/* <Route path='/' element={<Practice />} /> */}
      <Route path='/' element={<NewForm />} />
      <Route path='/' element={<NewForm />} />


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
