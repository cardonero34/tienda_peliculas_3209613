//Importar el archivo
import './stylesheets/user.css'

export const User = ({ imagen, nombre, estado }) => {
    return (
        /* fragments */
        <>
            <div className="card-container">
                <div className="card-image-section">
                    <img src={imagen} alt="Campaign Manager Morty" />
                </div>
                <div className="card-content">
                    <h1 className="card-title">
                        {nombre}
                    </h1>
                    <div className="status">
                        <span className="status-dot">
                            {estado}
                        </span>
                        <span>Dead - Human</span>
                    </div>
                    <div className="info-section">
                        <div className="info-label">Last known location:</div>
                        <div className="info-value">Citadel of Ricks</div>
                    </div>
                    <div className="info-section">
                        <div className="info-label">First seen in:</div>
                        <div className="info-value">The Ricklantis Mixup</div>
                    </div>
                </div>
            </div>
        </>
    )
}
