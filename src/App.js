import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { Navbar, Feed, MovieDetail, SearchFeed } from './components';

const App = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor: '#FC1503' }}>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Feed/>} />
                <Route path="/movie/:id" element={<MovieDetail/>} />
                <Route path="/search/:searchTerm" element={<SearchFeed/>} />
            </Routes>
        </Box>
    </BrowserRouter>
);

export default App