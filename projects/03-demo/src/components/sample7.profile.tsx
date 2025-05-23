// Tipos para las distintas formas del perfil
type AdminProfile = {
    type: 'admin';
    name: string;
    permissions: string[];
};

type UserProfile = {
    type: 'user';
    name: string;
    email: string;
};

// Unión de tipos para la prop
export type ProfileProps = {
    profile: AdminProfile | UserProfile;
};

export const ProfileCard: React.FC<ProfileProps> = ({ profile }) => {
    return (
        <div className="card">
            <h2>{profile.name}</h2>

            {profile.type === 'admin' ? (
                <div>
                    <strong>Permisos:</strong>
                    <ul>
                        {profile.permissions.map((perm) => (
                            <li key={perm}>{perm}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Email: {profile.email}</p>
            )}
        </div>
    );
};
