import "../style/SliderReverse.css";

type SliderProps = {
    logos: string[];
};

function SliderReverse({ logos}: SliderProps) {

    return (
        <div
            className="slider-reverse"
            style={{
                ["--width" as any]: "100px",
                ["--height" as any]: "70px",
                ["--quantity" as any]: logos.length,
            }}
        >
            <div className="list-reverse">
                {logos.map((logo, index) => (
                    <div className="item-reverse" key={index} style={{
                        ["--position" as any]: index,
                    }}>
                        <img src={logo} alt={`logo-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SliderReverse;
