import React from 'react'
import { Link } from 'react-router-dom'

function user() {
  return (
    <div className='w-3/5 bg-slate-200 shadow-lg shadow-cyan-500/50 m-14 rounded-2xl p-14'>
        <Link to={"/add"} className='text-white font-mono font-bold bg-purple-400 rounded-2xl p-3'>Add User</Link>
        <table border={1} cellPadding={10} cellSpacing={0} className='mt-8 shadow-lg border border-slate-500'>
            <thead className='bg-teal-700 text-center'>
                <tr>
                    <th className='border border-slate-600'>S.No</th>
                    <th className='border border-slate-600'>Name</th>
                    <th className='border border-slate-600'>Email</th>
                    <th className='border border-slate-600'>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border border-slate-600'>1</td>
                    <td className='border border-slate-600'>Test</td>
                    <td className='border border-slate-600'>test</td>
                    <td className='flex border-slate-600 gap-2'>
                        <button>Delete</button>
                        <Link to={`/edit`}>Edit</Link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default user