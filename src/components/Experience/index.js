import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import experienceData from '../Data/experiences.json'


const Experience = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        getExperience();
    }, []);

    const getExperience = async () => {
        const querySnapshot = await getDocs(collection(db, 'experience'));
        setExperience(querySnapshot.docs.map((doc) => doc.data()));
    }

    const renderExperience = (experience) => {
        return (
            <div className="images-container">
                {
                    experience.map((port, idx) => {
                        return (
                            <span className="image-box" key={idx}>
                                <img 
                                src={port.cover}
                                className="experience-image"
                                alt="experience" />
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </span>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container experience-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Experiences".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderExperience(experienceData.experience)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Experience;