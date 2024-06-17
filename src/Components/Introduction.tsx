import { ReactTyped } from "react-typed";
import React, {useRef}from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { Fade } from "react-bootstrap";
import Globe, { GlobeMethods } from "react-globe.gl";
import photo from '../assets/photo.png'

const TEXTS = ['Software Developer', 'Data Analyst', 'Math Enthusiast', 'Cat Dad', 'Drummer'];



function Introduction (){

    const [index, setIndex] = React.useState(0);
    const [isTypingComplete, setIsTypingComplete] = React.useState(false)
    const globeEl = useRef<GlobeMethods | undefined>(undefined);

    type PointData = {
        lat: number;
        lng: number;
        size: number;
        color: string;
        label: string;
    };
            
    const pointsData: PointData[] = [
        { lat: 31.2001, lng: 29.9187, size: 500, color: 'red', label: 'Alexandria-Egypt, where I come from' },
        { lat: 49.8954, lng: -97.1385, size: 500, color: 'blue', label: 'Living in Winnipeg Canada' },
        { lat: 64.1470, lng: 21.9408, size:500, color:'green', label:'Reykjavik in Iceland-dream destination :)'}
    ];

    React.useEffect(() => {
        if( isTypingComplete){
            const intervalId = setInterval(
                () => setIndex((index) => index + 1),
                3000, // every 3 seconds
                );
                return () => clearTimeout(intervalId);
        }
    }, [isTypingComplete]);



    React.useEffect(() => {
        if (globeEl.current) {
            const controls = globeEl.current.controls();
            controls.enableZoom = false; // Enable zoom
            controls.enableRotate = true; // Enable rotate
        }
    }, []);

    return (
        <div className="Introduction">
            <div id="Intro-text-container">
                <h2 id="Intro-1" >
                    <ReactTyped
                        strings={["Hi my name is Khaled,"]}
                        typeSpeed={80}
                        backSpeed={50}
                        showCursor={true}
                        onComplete={() => setIsTypingComplete(true)}
                    />
                </h2>
                
                <Fade in={isTypingComplete}>
                    <div>
                        <h2 id="Intro-2">
                            <p>I'm a&nbsp;</p>
                            {isTypingComplete ? (
                                <TextTransition springConfig={presets.wobbly}>
                                    {TEXTS[index % TEXTS.length]}
                                </TextTransition>
                            ) : (
                                TEXTS[0]
                            )}
                        </h2>
                    </div>
                </Fade>      

                <div >
                    <img src={photo} />
                </div>
            </div>

            <div className="globe-container" id="Globe">
                <div className="Explore">
                    <h2>Feel Free to Spin Around</h2>
                </div>
                <Globe
                    ref={globeEl} // Ensure the ref type is correct
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                    backgroundColor="rgba(0, 0, 0, 0)" // Set globe background color to transparent
                    width={800}
                    height={800}
                    pointsData={pointsData}
                    pointAltitude={0.01}
                    pointColor={d => (d as PointData).color}
                    pointRadius={0.5}
                    animateIn
                    labelsData={pointsData}
                    labelLat={d => (d as PointData).lat}
                    labelLng={d => (d as PointData).lng}
                    labelText={d => (d as PointData).label}
                    labelSize={d => 2.5} // Increase the label size
                    labelColor={() => 'white'}
                    labelDotRadius={1}
                    labelResolution={2}
                    labelsTransitionDuration={0}
                />
            </div>
        </div>
    );
}

export default Introduction;