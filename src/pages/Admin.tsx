import { useEffect, useState } from 'react'
import styled from 'styled-components'

import supabase from '@/config/supabase'
import Button from '@/components/Atom/Button'
import Card from '@/components/Molecule/Card'
import Loading from '@/components/Atom/Loading'
import Empty from '@/components/Molecule/Empty'

import { TacoProps } from '@/types/types'

const AdminStyle = styled.div`
  .button-container {
    margin-bottom: 12px;
  }

  .taco-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`

const fetchTacos = async () => {
  const { data, error } = await supabase
    .from('tacos')
    .select("*")

  if (error) throw error
  return data as TacoProps[]
}

const Admin = () => {
  const [tacos, setTacos] = useState<TacoProps[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchTacos()
      .then((data) => {
        setTacos(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  async function onClickAddTaco(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { error } = await supabase
      .from('tacos')
      .insert({
        title: 'from test',
        description: 'This is description'
      })

    if (error) throw error

    fetchTacos()
      .then((data) => {
        setTacos(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const onClickDelete = async (id: number) => {
    if (confirm('삭제하시겠습니까?') === false) return
    const { error } = await supabase
      .from('tacos')
      .delete()
      .eq('id', id)

    if (error) throw error

    fetchTacos()
      .then((data) => {
        setTacos(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <AdminStyle className='container'>
      {
        loading
          ? <Loading />
          :
          <>
            <div className="button-container">
              <Button text="추가하기" onClick={onClickAddTaco} />
            </div>
            {
              tacos.length ? (
                <div className="taco-container">
                  {
                    tacos.map((taco: TacoProps) => (
                      <Card
                        key={taco.id}
                        id={taco.id}
                        title={taco.title}
                        description={taco.description}
                        onDelete={onClickDelete}
                      />
                    ))
                  }
                </div>
              ) : (
                <Empty title="등록된 Task가 없습니다." />
              )
            }
          </>
      }
    </AdminStyle>
  )
}

export default Admin