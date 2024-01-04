import { useEffect } from 'react'
import styled from 'styled-components'

import supabase from '@/config/supabase'

const AdminStyle = styled.div`
  max-width: 1024px;
  margin: auto;
  position: relative;
`

const Admin = () => {
  useEffect(() => {
    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from('profile')
        .select("*")

      if (error) throw error
      console.log(data)
    }

    fetchProfile()
      .catch(err => console.error(err))
  }, [])

  return (
    <AdminStyle>
      Admin
    </AdminStyle>
  )
}

export default Admin