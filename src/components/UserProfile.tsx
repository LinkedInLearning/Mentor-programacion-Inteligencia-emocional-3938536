import { useEffect, useState } from 'react';
import UserDetails from './UserDetails';
import UserActions from './UserActions';
import styles from './UserProfile.module.css';

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
        return <p className={styles.loading}>cargando...</p>;
    }

    if (!user) {
        return <p className={styles.errorMessage}>Usuario no encontrado</p>;
    }

    return (
        <div className={styles.container}>
            <UserDetails user={user} />
            <UserActions userId={user.name} />
        </div>
    );
}

export default UserProfile;
