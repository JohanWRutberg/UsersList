'use client' // Markerar att denna komponent ska köras i webbläsaren (klientsidan)

import { useEffect, useState } from 'react'


// Typdefinition för användaren, baserad på API-svaret
type User = {
  name: { first: string; last: string }
  email: string
  gender: string
  picture: { medium: string }
}

export default function HomePage() {
  // State för användare som hämtas från API
  const [users, setUsers] = useState<User[]>([])

  // State för sökfältet
  const [search, setSearch] = useState('')

  // State för könsfilter: "all", "male" eller "female"
  const [gender, setGender] = useState<'all' | 'male' | 'female'>('all')

  // Körs en gång vid första render - hämtar data från API
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(res => res.json())
      .then(data => setUsers(data.results)) // Spara användare i state
  }, [])

  // Filtrera användare baserat på söktext och kön
  const filteredUsers = users.filter(user => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase()
    const matchesSearch = fullName.includes(search.toLowerCase()) // Matchar namn?
    const matchesGender = gender === 'all' || user.gender === gender // Matchar kön?
    return matchesSearch && matchesGender // Returnera användare som matchar båda
  })

  return (
    <main className="p-4 max-w-6xl mx-auto">
      {/* Sidrubrik */}
      <h1 className="text-2xl font-bold mb-4">Användarlista</h1>

      {/* Sökfält och könsfilter */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        {/* Sökfält */}
        <input
          type="text"
          placeholder="Sök namn..."
          className="border p-2 rounded flex-1"
          value={search}
          onChange={e => setSearch(e.target.value)} // Uppdatera söktext
        />

        {/* Dropdown för kön */}
        <select
          className="border p-2 rounded"
          value={gender}
          onChange={e => setGender(e.target.value as 'all' | 'male' | 'female')} // Uppdatera kön
        >
          <option value="all">Alla</option>
          <option value="female">Kvinna</option>
          <option value="male">Man</option>
        </select>
      </div>

      
    </main>
  )
}
