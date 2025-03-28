import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import UserModal from './UserModal';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `https://reqres.in/api/users?page=${currentPage}`
        );
        setUsers(response.data.data);
        setTotalPages(response.data.total_pages);
      } catch (err) {
        setMessage('Failed to fetch users');
      }
    };
    fetchUsers();
  }, [currentPage]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`https://reqres.in/api/users/${id}`);
        setUsers(users.filter(user => user.id !== id));
        setMessage('User deleted successfully');
        setTimeout(() => setMessage(''), 3000);
      } catch (err) {
        setMessage('Failed to delete user');
      }
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-green-100 text-green-800 p-4 rounded-lg mb-6 shadow-md"
            >
              {message}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">User List</h2>
          <div className="flex items-center mt-4 sm:mt-0 gap-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-6 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50 hover:bg-blue-600 transition"
            >
              Previous
            </button>
            <span className="text-gray-600 font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-6 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50 hover:bg-blue-600 transition"
            >
              Next
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-6 flex flex-col items-center"
            >
              <img
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
                className="w-24 h-24 rounded-full mb-4 border-4 border-blue-500"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {user.first_name} {user.last_name}
              </h3>
              <p className="text-gray-600 mb-4">{user.email}</p>
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedUser(user)}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-400 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 transition"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedUser && (
          <UserModal
            user={selectedUser}
            onClose={() => setSelectedUser(null)}
            onSave={(updatedUser) => {
              setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
              setMessage('User updated successfully');
              setTimeout(() => setMessage(''), 3000);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default UserList;
