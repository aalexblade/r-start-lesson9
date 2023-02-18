import { useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { NotFound } from '../../../components/NotFound/NotFound';
import { confetti } from '../../../helpers/Confetti/Confetti';
// import { deleteUserAction } from '../../../redux/counter/counter.action';
import { deleteUserActions, usersSearchActions } from '../../../redux/users/users.actions';

import { UsersItem } from './UsersItem';

const UsersPage = () => {
  const dispatch = useDispatch();

  const search = useSelector(state => state.users.search);
  const users = useSelector(state => state.users.data);

  const handleSearch = event => {
    dispatch(usersSearchActions(event.target.value));
  };

  const handleDelete = id => {
    dispatch(deleteUserActions(id));
    confetti.run();
  };

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [users, search]);

  const totalOpenToWork = useMemo(() => {
    return users.filter(user => user.isOpenToWork).lenght;
  }, [users]);

  return (
    <>
      <div className="input-group mb-3">
        <input
          value={search}
          onChange={handleSearch}
          type="search"
          className="form-control"
          placeholder="Search user by name..."
        />
      </div>

      <p>Total users: {users.length}</p>
      <p>Total Open to Work: {totalOpenToWork}</p>

      <div className="mb-5">
        {filteredUsers.length ? (
          filteredUsers.map(user => (
            <UsersItem key={user.id} user={user} onDelete={handleDelete} />
          ))
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
};

export default UsersPage;

// ====================LESSON 11 ===============================
// import { useMemo, useState } from 'react';

// import usersJson from '../../../assets/users.json';
// import { NotFound } from '../../../components/NotFound/NotFound';
// import { confetti } from '../../../helpers/Confetti/Confetti';

// import { UsersItem } from './UsersItem';

// const UsersPage = () => {
//   const [search, setSearc] = useState('');
//   const handleSearch = event => {
//     setSearc(event.target.value);
//   };

//   const [users, setUsers] = useState(usersJson);
//   const handleDelete = id => {
//     confetti.run();
//     setUsers(prev => prev.filter(user => user.id !== id));
//   };

//   const filteredUsers = useMemo(() => {
//     return users.filter(user =>
//       user.name.toLowerCase().includes(search.toLowerCase()),
//     );
//   }, [users, search]);

//   const totalOpenToWork = useMemo(() => {
//     return users.filter(user => user.isOpenToWork).lenght;
//   }, [users]);

//   return (
//     <>
//       <div className="input-group mb-3">
//         <input
//           value={search}
//           onChange={handleSearch}
//           type="search"
//           className="form-control"
//           placeholder="Search user by name..."
//         />
//       </div>

//       <p>Total users: {users.length}</p>
//       <p>Total Open to Work: {totalOpenToWork}</p>

//       <div className="mb-5">
//         {filteredUsers.length ? (
//           filteredUsers.map(user => (
//             <UsersItem key={user.id} user={user} onDelete={handleDelete} />
//           ))
//         ) : (
//           <NotFound />
//         )}
//       </div>
//     </>
//   );
// };

// export default UsersPage;
// ===========================================

// import { useDispatch, useSelector } from 'react-redux';

// import { NotFound } from '../../../components/NotFound/NotFound';
// import { confetti } from '../../../helpers/Confetti/Confetti';
// import {
//   selectFilteredUsers,
//   selectIsModalOpen,
//   selectTotalOpenToWork,
//   selectUsersSearch,
// } from '../../../redux/users/users.selector';
// import {
//   deleteUserAction,
//   toggleModalAction,
//   usersSearchAction,
// } from '../../../redux/users/users.slice';

// import { UsersItem } from './UsersItem';

// const UsersPage = () => {
//   const dispatch = useDispatch();

//   const search = useSelector(selectUsersSearch); // '' === ''
//   const users = useSelector(selectFilteredUsers); // [10] === [10] -> true
//   const totalOpenToWork = useSelector(selectTotalOpenToWork); // 5 -> 5
//   // const { users, search } = useSelector(state => state.users); // stop

//   const handleSearch = event => {
//     dispatch(
//       usersSearchAction(
//         event.target.value,
//       ) /* -> { type: SEARCH, payload: event.target.value } */,
//     );
//   };

//   const handleDelete = id => {
//     dispatch(deleteUserAction(id));
//     confetti.run();
//   };

//   const isModalOpen = useSelector(selectIsModalOpen); // true -> false
//   const toggleModal = () => {
//     dispatch(toggleModalAction());
//   };

//   return (
//     <>
//       <button type="button" className="btn btn-primary" onClick={toggleModal}>
//         Toggle modal
//       </button>
//       {isModalOpen && <p>My modal</p>}

//       <div className="input-group mb-3">
//         <input
//           value={search}
//           onChange={handleSearch}
//           type="search"
//           className="form-control"
//           placeholder="Search user by name..."
//         />
//       </div>

//       <p>Total users: {users.length}</p>
//       <p>Total Open to Work: {totalOpenToWork}</p>

//       <div className="mb-5">
//         {users.length ? (
//           users.map(user => (
//             <UsersItem key={user.id} user={user} onDelete={handleDelete} />
//           ))
//         ) : (
//           <NotFound />
//         )}
//       </div>
//     </>
//   );
// };

// export default UsersPage;

// import { useDispatch, useSelector } from 'react-redux';

// import { NotFound } from '../../../components/NotFound/NotFound';
// import { confetti } from '../../../helpers/Confetti/Confetti';
// import {
//   selectFilteredUsers,
//   selectIsModalOpen,
//   selectTotalOpenToWork,
//   selectUsersSearch,
// } from '../../../redux/users/users.selector';
// import {
//   deleteUserAction,
//   toggleModalAction,
//   usersSearchAction,
// } from '../../../redux/users/users.slice';

// import { UsersItem } from './UsersItem';

// const UsersPage = () => {
//   const dispatch = useDispatch();

//   const search = useSelector(selectUsersSearch); // '' === ''
//   const users = useSelector(selectFilteredUsers); // [10] === [10] -> true
//   const totalOpenToWork = useSelector(selectTotalOpenToWork); // 5 -> 5
//   // const { users, search } = useSelector(state => state.users); // stop

//   const handleSearch = event => {
//     dispatch(
//       usersSearchAction(
//         event.target.value,
//       ) /* -> { type: SEARCH, payload: event.target.value } */,
//     );
//   };

//   const handleDelete = id => {
//     dispatch(deleteUserAction(id));
//     confetti.run();
//   };

//   const isModalOpen = useSelector(selectIsModalOpen); // true -> false
//   const toggleModal = () => {
//     dispatch(toggleModalAction());
//   };

//   return (
//     <>
//       <button type="button" className="btn btn-primary" onClick={toggleModal}>
//         Toggle modal
//       </button>
//       {isModalOpen && <p>My modal</p>}

//       <div className="input-group mb-3">
//         <input
//           value={search}
//           onChange={handleSearch}
//           type="search"
//           className="form-control"
//           placeholder="Search user by name..."
//         />
//       </div>

//       <p>Total users: {users.length}</p>
//       <p>Total Open to Work: {totalOpenToWork}</p>

//       <div className="mb-5">
//         {users.length ? (
//           users.map(user => (
//             <UsersItem key={user.id} user={user} onDelete={handleDelete} />
//           ))
//         ) : (
//           <NotFound />
//         )}
//       </div>
//     </>
//   );
// };

// export default UsersPage;
