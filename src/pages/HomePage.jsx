import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddButton from '../components/AddButton';
import ThreadLists from '../components/ThreadLists';
import asyncPopulateUsersAndThreads from '../states/shared/action';

function HomePage() {
  const {
    threads = [],
    users = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));

  return (
    <section className="container">
      <h1 className="my-3">Diskusi tersedia</h1>
      <ThreadLists threads={threadList} />
      <AddButton />
    </section>
  );
}

export default HomePage;
