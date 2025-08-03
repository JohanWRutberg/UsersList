// Typdefinition för props: vi förväntar oss en användare med namn, e-post och bild
type Props = {
  user: {
    name: { first: string; last: string }
    email: string
    picture: { medium: string }
  }
}

// Komponent som visar en användares kort med bild, namn och e-post
export default function UserCard({ user }: Props) {
  return (
    <div className="bg-white shadow rounded p-4 flex flex-col items-center text-center">
      {/* Användarens profilbild */}
      <img
        src={user.picture.medium}
        alt={user.name.first}
        className="rounded-full w-24 h-24 mb-3"
      />
      
      {/* Namn */}
      <h2 className="font-semibold">{user.name.first} {user.name.last}</h2>
      
      {/* E-post */}
      <p className="text-sm text-gray-600">{user.email}</p>
    </div>
  )
}
