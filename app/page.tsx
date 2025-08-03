'use client'

import { useEffect, useState } from 'react'
import UserCard from './components/UserCard'
import SearchBar from './components/SearchBar'
import GenderFilter from './components/GenderFilter'

// Typ för användardata
type User = {
  name: { first: string; last: string }
  email: string
  gender: string
  picture: { medium: string }
}

export default function HomePage() {
  // State för användare, söktext och könsfilter
  const [users, setUsers] = useState<User[]>([])
  const [search, setSearch] = useState('')
  const [gender, setGender] = useState<'all' | 'male' | 'female'>('all')

  // Hämtar data från API vid första laddning
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(res => res.json())
      .then(data => setUsers(data.results))
  }, [])

  // Filtrerar användarna baserat på söktext och kön
  const filteredUsers = users.filter(user => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase()
    const matchesSearch = fullName.includes(search.toLowerCase())
    const matchesGender = gender === 'all' || user.gender === gender
    return matchesSearch && matchesGender
  })

  return (
    <main className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Användarlista</h1>

      {/* Sökfält och könsfilter */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        {/* Sökfält från separat komponent */}
        <SearchBar value={search} onChange={setSearch} />

        {/* Könsfilter från separat komponent */}
        <GenderFilter value={gender} onChange={setGender} />
      </div>

      {/* Lista användarkort */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredUsers.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </main>
  )
}
