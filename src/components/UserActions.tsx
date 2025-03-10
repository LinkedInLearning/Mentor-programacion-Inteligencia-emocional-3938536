import styles from './UserProfile.module.css';

function UserActions({ userId }) {
    const handleEdit = () => alert(`Editar a ${userId}`);
    const handleDelete = () => alert(`Borrar a ${userId}`);
    const handleMessage = () => alert(`Enviar mensaje a ${userId}`);

    return (
        <div className={styles.actions}>
            <button className={styles.editButton} onClick={handleEdit}>Editar</button>
            <button className={styles.deleteButton} onClick={handleDelete}>Borrar</button>
            <button className={styles.messageButton} onClick={handleMessage}>Enviar mensaje</button>
        </div>
    );
}

export default UserActions;
