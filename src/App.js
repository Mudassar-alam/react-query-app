import logo from './logo.svg';
import './App.css';
import { QueryClient , QueryClientProvider} from '@tanstack/react-query'
import Home from './components/Home';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import PostList from './components/Posts/PostList';
import Singlepost from './components/Posts/Singlepost';
function App() {


  return (
    
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PostList />} exact   />
      <Route path='/posts/:id' element={<Singlepost />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
