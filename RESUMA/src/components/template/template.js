import React from 'react';
import ImageCard from './card';
import Places from '../../data/data';
import CardAnimations from '../../hook/cardAnimation';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setAlert } from '../../actions/alert';
import './TemplateStyles.css';

export default function Template() {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const checked = CardAnimations('header');
    const handleClick = async () => {
        await dispatch(setAlert('you need to sign In first', 'danger'));
    };
    return (
        <div className="rootTemplate" id='card'>
            {auth.authenticated ? (
                <>
                    <Link
                        to='/chronologicalResume'
                        style={{ textDecoration: 'none' }}
                    >
                        <ImageCard place={Places[0]} checked={checked} />
                    </Link>
                </>
            ) : (
                <>
                    <Link
                        to='/'
                        style={{ textDecoration: 'none' }}
                        onClick={(e) => handleClick()}
                    >
                        <ImageCard place={Places[0]} checked={checked} />
                    </Link>
                </>
            )}
            {auth.authenticated ? (
                <>
                    <Link
                        to='/functionalResume'
                        style={{ textDecoration: 'none' }}
                    >
                        <ImageCard place={Places[1]} checked={checked} />
                    </Link>
                </>
            ) : (
                <>
                    <Link
                        to='/'
                        style={{ textDecoration: 'none' }}
                        onClick={(e) => handleClick()}
                    >
                        <ImageCard place={Places[1]} checked={checked} />
                    </Link>
                </>
            )}
            {auth.authenticated ? (
                <>
                    <Link
                        to='/targetedResume'
                        style={{ textDecoration: 'none' }}
                    >
                        <ImageCard place={Places[2]} checked={checked} />
                    </Link>
                </>
            ) : (
                <>
                    <Link
                        to='/'
                        style={{ textDecoration: 'none' }}
                        onClick={(e) => handleClick()}
                    >
                        <ImageCard place={Places[2]} checked={checked} />
                    </Link>
                </>
            )}
            {auth.authenticated ? (
                <>
                    <Link
                        to='/combinationalResume'
                        style={{ textDecoration: 'none' }}
                    >
                        <ImageCard place={Places[3]} checked={checked} />
                    </Link>
                </>
            ) : (
                <>
                    <Link
                        to='/'
                        style={{ textDecoration: 'none' }}
                        onClick={(e) => handleClick()}
                    >
                        <ImageCard place={Places[3]} checked={checked} />
                    </Link>
                </>
            )}
        </div>
    );
}
