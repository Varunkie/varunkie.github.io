/**
 * Metadata hooks module.
 * @module hooks/metadata
 */

import { useLayoutEffect, useState, useCallback } from 'react';
import { capitalize } from '../../tools/string';
import { useLocation } from "react-router-dom";
import qs from 'query-string';

/**
 *Set given query to current client hyperlink without reload.
 */
export const setQueryStringWithoutPageReload = (value) => { 
  const base = `${window.location.protocol}//${window.location.host}`;
  const url = `${base}${window.location.pathname}${value}`;
  window.history.pushState({ path: url }, "", url);
};

/**
 *Set given parameter to current client hyperlink query.
 */
export const setQueryStringValue = (key, value, query = window.location.search) => { 
   const values = qs.parse(query); 
   const aux = (value || value === 0) && value !== '' ? value : undefined;
   const string = qs.stringify({ ...values, [key]: aux }); 
   setQueryStringWithoutPageReload(string ? `?${string}` : '');
};

/**
 * Returns the current parameter in the client hyperlink query from given key.
 */
export const getQueryStringValue = (key, query = window.location.search) => { 
  const values = qs.parse(query); 
  return values[key];
};

/**
 * Changes query hyperlink to given value.
 */
export const useQueryState = (key, initialValue) =>  {
  const [value, setValue] = useState(getQueryStringValue(key) || initialValue);
  const bindValue = useCallback((value) => setValue(state => {
    const result = typeof value === "function" ? value(state) : value;
    setQueryStringValue(key, result); return result;
  }), [key]);
  return [value, bindValue];
};

/**
 * Changes document title metadata to given value.
 */
export const useDocumentTitle = (value) => {
  useLayoutEffect(() => { if (value) {
    const string = document.title;
    const subtitle = capitalize(value);
    document.title = `${subtitle} | ${string}`;
    return () => document.title = string; }
  }, [value]);
};

/**
 * Returns query parameters from current client hyperlink.
 */
export const useQuery = () => {
  const params = useLocation().search;
  const search = new URLSearchParams(params);
  const keys = search.keys(); let query = {};
  for (let key of keys) query[key] = search.get(key);
  return query;
};