import React from 'react'

const Search = () => {
  return (
    <div id='search'>
      <div className='search__inner'>
        <label htmlFor='serachInput'>
          <span className='ir'>검색</span>
        </label>
        <input
          type='search'
          name='serchInput'
          id='searchInput'
          autoComplete='off'
          className='search__input'
          placeholder='검색어를 입력하세요'
        />
      </div>
    </div>
  )
}

export default Search