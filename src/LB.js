import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useRef, useState } from "react";
import { Button, Card, Alert } from 'react-bootstrap';

const LB = () => {

    const RenderTime = ({ remainingTime }) => {
        const currentTime = useRef(remainingTime);
        const prevTime = useRef(null);
        const isNewTimeFirstTick = useRef(false);
        const [, setOneLastRerender] = useState(0);

        if (currentTime.current !== remainingTime) {
            isNewTimeFirstTick.current = true;
            prevTime.current = currentTime.current;
            currentTime.current = remainingTime;
        } else {
            isNewTimeFirstTick.current = false;
        }

        // force one last re-render when the time is over to trigger the last animation
        if (remainingTime === 0) {
            setTimeout(() => {
                setOneLastRerender((val) => val + 1);
            }, 10);
            return (

                <Alert variant='danger'>
                    Let's get back to work!!!
                </Alert>
            );
        }

        const isTimeUp = isNewTimeFirstTick.current;

        return (
            <div className="time-wrapper" >
                <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`} style={{ color: "white" }}>
                    {remainingTime}
                </div>
                {prevTime.current !== null && (
                    <div
                        style={{ color: "white" }}
                        key={prevTime.current}
                        className={`time ${!isTimeUp ? "down" : ""}`}
                    >
                        {prevTime.current}
                    </div>
                )}
            </div>
        );
    };
    const [isOn, setIsOn] = useState(false)

    const startClick = () => {
        setIsOn(true);
        console.log('isOn has value', isOn);
    }
    const stopClick = () => {
        setIsOn(false)
        console.log('isOn has value', isOn);
    }
    return (
        <div  >

            {/* task1 */}
            <Card className="card" bg='info' style={{
                width: '20rem',

                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Card.Body>
                    <Card.Title style={{
                        color: "white"
                    }}>Long Break</Card.Title>

                    <div className="timer-wrapper">
                        <CountdownCircleTimer
                            isPlaying={isOn}
                            duration={1200}
                            width={20}
                            colors={[["#fc8df1", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                        >
                            {RenderTime}

                        </CountdownCircleTimer>
                    </div>
                    <br />
                    <Card.Text style={{
                        color: "white"
                    }}>
                        You deserve a long break! Go Enjoy!!!
                    </Card.Text>
                    <div className="two-buttons">
                        <Button onClick={startClick} variant="primary">Start</Button>
                        <Button onClick={stopClick} variant="outline-danger ml-3">Stop</Button>{ }
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default LB;