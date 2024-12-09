import React from 'react'

export const DeepCopyObject = () => {
    let a = {
        name: 'it-kamasutra',
        protocol: 'https',
        maxStudentsCount: 10,
        isOnline: true,
        students: ['ivan', 'andrey', 'farid'],
        classroom: {
            teacher: {
                name: 'wew',
                age: 18
            }
        }
    }
    let b = a
    console.log(a == b)
    let c = {...a}
    console.log(c == a)
    c.students = [...a.students, 'Max']
    c.name = 'it-incubator.by'
    c.isOnline = false
    c.students.push('Marry')
    c.classroom.teacher.name = 'Dmitry'

    console.log('a is ', a)
    console.log('b is ', b)
    console.log('c is ', c)

    return <div>
        DeepCopyObject enable
    </div>
}

