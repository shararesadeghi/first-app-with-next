import React from 'react';
import { useRouter } from 'next/router';

const CourseId = () => {
    const router = useRouter();
    const {courseId,studentId} = router.query;
    return (
        <h1>
           Details of courses #{courseId} for student #{studentId} 
        </h1>
    );
};

export default CourseId;