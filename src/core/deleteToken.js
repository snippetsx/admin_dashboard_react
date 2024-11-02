import { useState } from 'react';

export default function deleteToken(){
    localStorage.removeItem('token');
};
