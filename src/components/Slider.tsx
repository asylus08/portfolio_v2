import "../style/Slider.css";

type SliderProps = {
    logos: string[];
};

function Slider({ logos }: SliderProps) {

    return (
        <div
            className="slider"
            style={{
                ["--width" as any]: "100px",
                ["--height" as any]: "70px",
                ["--quantity" as any]: logos.length
            }}
        >
            <div className="list">
                {logos.map((logo, index) => (
                    <div className="item" key={index} style={{
                        ["--position" as any]: index,
                    }}>
                        <img src={logo} alt={`logo-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Slider;
