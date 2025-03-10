import { useEffect, useState } from 'react';

// Import de modulos CSS 
import styles from './UserProfile.module.css';

// styled-components
import styled from 'styled-components';


function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/users/${userId}.json`)
            .then(response => response.json())
            .then(data => {
                setUser(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [userId]);

    if (loading) {
        return <p style={{ color: 'blue', fontWeight: 'bold' }}>Cargando...</p>;
    }

    if (!user) {
        return <p className={styles.errorMessage}>Usuario no encontrado</p>;
    }

    // Formato de fecha  
    const formattedDate = new Date(user.createdAt).toLocaleDateString();

    // HTML y CSS
    return (
        <div className={styles.container}>
            <div className="user-profile">


                <h2 style={{ fontSize: '1.5em', color: '#333' }}>{user.name}</h2>


                <p className={styles.email}>Email: {user.email}</p>
                <p>Miembro desde: {formattedDate}</p>

                {/* styled-components  y eventos inline */}
                <ActionButton onClick={() => alert('Editar usuario')}>Editar</ActionButton>
                <ActionButton danger onClick={() => alert('Borrar Usuario')}>Borrar</ActionButton>

                {/* CSS Inline   */}
                <button
                    onClick={() => alert('Enviar Mensaje')}
                    style={{ backgroundColor: 'purple', color: 'white', padding: '5px 10px' }}
                >
                    Enviar Mensaje
                </button>
            </div>
        </div>
    );
}

// styled-component 
const ActionButton = styled.button`
    background-color: ${props => (props.danger ? 'red' : 'green')};
    color: white;
    border: none;
    padding: 8px 12px;
    margin-right: 5px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

export default UserProfile;
