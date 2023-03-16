import React from 'react';
import ProjectItem from './ProjectItem';
import netflixImg from '../public/assets/projects/netflix.png';
import chatImg from '../public/assets/projects/chat.png';
import pokeImg from '../public/assets/projects/poke.png'
import moviesImg from '../public/assets/projects/movies.png'
import skeletonImg from '../public/assets/projects/skeleton.png'

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I&#39;ve Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                     <ProjectItem 
                        title='Movies API' 
                        backgroundImg={moviesImg}
                        projectURL='/movies'
                        tech='NodeJS'
                    />
                    <ProjectItem 
                        title='Chat API' 
                        backgroundImg={chatImg}
                        projectURL='/chat'
                        tech='NodeJS'
                    />
                    <ProjectItem 
                        title='Skeleton' 
                        backgroundImg={skeletonImg}
                        projectURL='/skeleton'
                        tech='NodeJS'
                    />
                    <ProjectItem 
                        title='Netflix Clone' 
                        backgroundImg={netflixImg}
                        projectURL='/netflix'
                        tech='ReactJS'
                    />
                    <ProjectItem 
                        title='Poke API' 
                        backgroundImg={pokeImg}
                        projectURL='/pokeapi'
                        tech='ReactJS'
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;