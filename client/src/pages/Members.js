import React from 'react';
import { Link } from 'react-router-dom';

import Badge from '../components/utils/Badge';
import AdminDashboard from '../layouts/admin/Dashboard';
import Avatar from '../images/avatar.svg';

const Members = () => {
  const members = [
    {
      _id: '5f01db955a660c37289312de',
      firstName: 'Adam',
      lastName: 'Gray',
      email: 'adamjamesgray.1992@gmail.com',
      status: true,
      __v: 0,
    },
    {
      _id: '5f01db955a660c37289312df',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@outlook.com',
      status: false,
      __v: 0,
    },
    {
      _id: '5f01db955a660c37289312dg',
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jdoe@gmail.com',
      status: true,
      __v: 0,
    },
  ];

  return (
    <AdminDashboard>
      <div>
        <h1 className='text-4xl font-semibold'>Browse Members</h1>
        <h2 className='text-md text-gray-700'>View all your members</h2>
      </div>
      <div className='mt-4 md:mt-8'>
        <table className='min-w-full'>
          <thead>
            <tr>
              <th class='px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                Name
              </th>
              <th class='px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                Status
              </th>
              <th class='px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            {members.map((member) => (
              <tr>
                <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0 h-10 w-10'>
                      <img
                        src={member.imageUrl || Avatar}
                        alt=''
                        className='h-10 w-10 rounded-full'
                      />
                    </div>
                    <div className='ml-4'>
                      <div className='text-sm leading-5 font-medium text-gray-900'>
                        {member.firstName + ' ' + member.lastName}
                      </div>
                      <div className='text-sm leading-5 text-gray-500'>
                        {member.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                  <div className='flex items-center'>
                    {member.status ? (
                      <Badge label='Active' color='green' />
                    ) : (
                      <Badge label='Inactive' color='red' />
                    )}
                  </div>
                </td>
                <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                  <div className='flex items-center'>
                    <Link to={'/members/' + member._id + '/edit'}>Edit</Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminDashboard>
  );
};

export default Members;
