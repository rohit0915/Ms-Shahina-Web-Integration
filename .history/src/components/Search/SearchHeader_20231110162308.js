import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Spin } from 'antd';
import ProductRepository from '~/repositories/ProductRepository';
import ProductSearchResult from '~/components/elements/products/ProductSearchResult';
import { FilterCategoryProduct } from '~/repositories/Api/User/user-api';


const SearchHeader = () => {
  return (
    <div>SearchHeader</div>
  )
}

export default SearchHeader