import { Grid, Stack } from '@mui/material'
import { useState, useEffect } from "react";
import CreateBoardModal from "./CreateBoardModal";
import Topbar from "./Topbar"
import BoardCard from './BoardCard';
import useApp from '../../hooks/useApp';
import AppLoader from '../../components/layout/AppLoader';
import useStore from '../../store';



const BoardsScreen = () => {
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const {fetchBoards} = useApp();
    const {areBoardsFetched} = useStore();

    useEffect(() => {
        if (!areBoardsFetched) fetchBoards(setLoading);
        else setLoading(false);
      }, []);

    if(loading) return <AppLoader />;
    return (
        <>
        <Topbar openModal={() => setShowModal(true)} />
        {showModal && <CreateBoardModal closeModal={() => setShowModal(false)} />}
        {/* <NoBoards /> */}

        <Stack mt={5} px={3}>
          <Grid container spacing={4} >
            <BoardCard />
            <BoardCard />
            <BoardCard />
            <BoardCard />
            <BoardCard />
            <BoardCard />
            <BoardCard />

            
          </Grid>
        </Stack>
        </>
        
    );
};

export default BoardsScreen;