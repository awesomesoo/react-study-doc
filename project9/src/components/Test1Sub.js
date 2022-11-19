import React, { useMemo } from 'react';

const getColor  = ( color )  => {
    console.log('getColor')
    switch( color ) {
        case 'red': return '빨강입니다.'
        case 'green': return '녹색입니다.'
        case 'blue': return '파랑입니다.'
        default: return '색이존재없음'
    }
}
const getFood  = ( food )  => {
    console.log('getFood')
    switch( food ) {
        case '불고기': return '불고기입니다.'
        case '라면': return '라면입니다.'
        case '쫄면': return '쫄면입니다.'        
    }
}


const Test1Sub = ({ color , food }) => {
    //사용자 정의 함수 
    // const colorInfo  = getColor( color )
    // const foodInfo  = getFood( food )
    const colorInfo = useMemo( () => {
        return getColor( color )
    } , [color])
    const foodInfo = useMemo( ()  => getFood( food ) , [food])
    return (
        <div>
            <h3> 좋아하는 색: { color }</h3>
            <h3>  색 설명: { colorInfo } </h3>
            <hr />
            <h3> 좋아하는 음식: { food }</h3>
            <h3> 음식 설명: { foodInfo } </h3>
            <hr />
        </div>
    );
};

export default Test1Sub;