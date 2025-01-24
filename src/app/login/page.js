import React from 'react';

const page = () => {
  return (
    <div className="my-16 min-h-screen">
      <div className="card bg-purple-100 w-2/3 shadow-2xl mx-auto">
        <h1 className="text-5xl font-bold text-purple-800 mt-10 text-center">Login now!</h1>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" required />

          </div>
          <div className="form-control mt-6">
            <button className="btn bg-purple-400 text-white hover:text-purple-700">Login</button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default page;