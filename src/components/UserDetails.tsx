import styles from './UserProfile.module.css';

function UserDetails({ user }) {
    const formattedDate = new Date(user.createdAt).toLocaleDateString();

    return (
        <div className={styles.details}>
            <h2 className={styles.name}>{user.name}</h2>
            <p className={styles.email}>Email: {user.email}</p>
            <p>Miembro desde: {formattedDate}</p>
        </div>
    );
}

export default UserDetails;
