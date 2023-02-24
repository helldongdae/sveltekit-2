  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="bg-white shadow-md rounded px-8 py-6 w-full md:max-w-md">
      <h2 class="text-2xl text-gray-800 mb-6">My Info</h2>
      <form>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" value="John Doe" disabled>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" value="johndoe@example.com" disabled>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
            Address
          </label>
          <textarea class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" rows="3" disabled>123 Main St, Anytown USA</textarea>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
            Phone Number
          </label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" value="555-555-1234" disabled>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Edit Info
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-purple-600 hover:text-purple-700" href="#">
            Change Password
          </a>
        </div>
      </form>
    </div>
  </div>