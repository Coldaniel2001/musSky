import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


import UserProvider from '../context/UserProvider'
import SongProvider from '../context/song/SongProvider'

import Skeleton from '../Skeleton/SkeletonSidebarRight'




// import PrivateRouter from './PrivateRouter'

// import Playlist from '../page/PlayList/Playlist'
import AdminPage from '../page/AdminPage/AdminPage'
import Mysongs from '../page/MySongs/Mysongs'
import { AdminUserPage } from '../page/AdminPage/AdminUserPage'

import MusicPlayerPhone from '../component/MusicPlayerPhone/MusicPlayerPhone'
import RealPlaylistPage from '../page/RealPlaylistPage/RealPlaylistPage'
import FinalRegister from '../FinalRegister/FinalRegister'

import HomePage from '../page/HomePage/HomePage'
import ProfilePage from '../page/ProfilePage/ProfilePage'
import PlayListPage from '../page/PlayListPage/PlayListPage'
import GendersPage from '../page/GendersPage/GendersPage'
import PlaylistsProvider from '../context/playlists/PlaylistsProvider'
import ArtistIdPage from '../page/ArtistIdPage/ArtistIdPage'

import PlaylistIdPage from '../page/PlaylistIdPage/PlaylistIdPage'
import MusicReproductionLive from '../page/MusicReproductionLive/MusicReproductionLive'
import { AdminArtistPage } from '../page/AdminPage/AdminArtistsPage'
import SpanishPop from '../page/GendersPage/SpanishPop'
import LatinUrban from '../page/GendersPage/LatinUrban'
import HipHop from '../page/GendersPage/HipHop'
import ElectronicaPage from '../page/GendersPage/ElectronicaPage'
import SpanishRock from '../page/GendersPage/SpanishRock'
import Reggae from '../page/GendersPage/Reggae'
import PopLatino from '../page/GendersPage/PopLatino'
import Jazz from '../page/GendersPage/Jazz'
import Rock from '../page/GendersPage/Rock'
import Flamenco from '../page/GendersPage/Flamenco'



// import PrivateRouter from './PrivateRouter'


// const LoginPage = lazy(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(import('../page/LoginPage/LoginPage')), 2000);
//     });
// });

// const RealPlaylistPage = lazy(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(import('../page/RealPlaylistPage/RealPlaylistPage')), 2000);
//     });
// });


const RoutesPath = () => {
    return (
        <UserProvider>
            <SongProvider>
                <PlaylistsProvider >
                    <BrowserRouter>
                        <Routes>
                            <Route path='/home' element={
                                <>
                                    <HomePage />
                                    <MusicPlayerPhone />
                                </>
                            } />
                            <Route path='/profile' element={
                                <>
                                    <ProfilePage />
                                    <MusicPlayerPhone />
                                </>

                            } />
                            <Route path='/real-playlist' element={
                                <Suspense fallback={<Skeleton />}>
                                    <RealPlaylistPage />
                                    <MusicPlayerPhone />
                                </Suspense>
                            } />
                            <Route path='/individual-playlist' element={
                                <>
                                    <PlayListPage />
                                    <MusicPlayerPhone />
                                </>

                            } />
                            <Route path='/genders' element={
                                <>
                                    <GendersPage />
                                    <MusicPlayerPhone />
                                </>

                            } />
                            <Route path='/artist/:userId' element={
                            <>
                                <ArtistIdPage/>
                                <MusicPlayerPhone />
                            </>
                        } />
                            <Route path='/playlist/:userId' element={
                            <>
                                <PlaylistIdPage/>
                                <MusicPlayerPhone />
                            </>
                        } />

                            <Route path='/*' element={<Navigate to={'/home'} />} />
                            <Route path='/admin' element={<AdminPage />} />
                            <Route path='/admin/:userId' element={<AdminUserPage />} />
                            
                            <Route path='/mis-canciones' element={
                            <>
                                <MusicPlayerPhone />
                                <Mysongs />
                            </>
                        } />
                            <Route path='/final-register' element={<FinalRegister />} />
                            <Route path='/reproduction-live' element={<MusicReproductionLive/>} />
                            <Route path='/spanish-pop' element={
                            <>
                                <MusicPlayerPhone/>
                                <SpanishPop/>
                            </>
                            }/>
                            <Route path='/latin-urban' element={
                            <>
                                <MusicPlayerPhone/>
                                <LatinUrban/>
                            </>
                            }/>
                            <Route path='/hip-hop' element={
                            <>
                                <MusicPlayerPhone/>
                                <HipHop />
                            </>
                            }/>
                            <Route path='/electronic' element={
                            <>
                                <MusicPlayerPhone/>
                                <ElectronicaPage />
                            </>
                            }/>
                            <Route path='/spanish-rock' element={
                            <>
                                <MusicPlayerPhone/>
                                <SpanishRock />
                            </>
                            }/>
                            <Route path='/reggae' element={
                            <>
                                <MusicPlayerPhone/>
                                <Reggae />
                            </>
                            }/>
                            <Route path='/pop-latino' element={
                            <>
                                <MusicPlayerPhone/>
                                <PopLatino />
                            </>
                            }/>
                            <Route path='/jazz' element={
                            <>
                                <MusicPlayerPhone/>
                                <Jazz />
                            </>
                            }/>
                            <Route path='/rock' element={
                            <>
                                <MusicPlayerPhone/>
                                <Rock />
                            </>
                            }/>
                            <Route path='/flamenco' element={
                            <>
                                <MusicPlayerPhone/>
                                <Flamenco />
                            </>
                            }/>
                        </Routes>
                    </BrowserRouter>
                </PlaylistsProvider>
            </SongProvider>
        </UserProvider>
    )
}

export default RoutesPath