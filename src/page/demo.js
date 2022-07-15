import React from 'react';
import DefaultLayout from '../components/layout/Default';
import DefaultCard from '../components/card/Default';
import GltfModel from '../components/model/gltf';

export default function Demo() {
  return (
    <DefaultLayout>
      <div>SMART BUILDING</div>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ width: '100%', height: 'calc(50% - 10px)' }}>
          <DefaultCard title="test"></DefaultCard>
        </div>
        <div
          style={{
            width: '100%',
            height: 'calc(50% - 10px)',
            marginTop: '10px',
          }}
        >
          <DefaultCard title="test"></DefaultCard>
        </div>
      </div>
      <div
        style={{
          width: 'calc(100% - 20px)',
          height: 'calc(100% - 10px)',
          padding: '0 10px',
        }}
      >
        <DefaultCard>
          <GltfModel></GltfModel>
        </DefaultCard>
      </div>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ width: '100%', height: 'calc(50% - 10px)' }}>
          <DefaultCard title="test"></DefaultCard>
        </div>
        <div
          style={{
            width: '100%',
            height: 'calc(50% - 10px)',
            marginTop: '10px',
          }}
        >
          <DefaultCard title="test"></DefaultCard>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ width: '20%', height: '100%' }}>
          <DefaultCard></DefaultCard>
        </div>
        <div style={{ width: 'calc(60% - 20px)', height: '100%' }}>
          <DefaultCard></DefaultCard>
        </div>
        <div style={{ width: '20%', height: '100%' }}>
          <DefaultCard></DefaultCard>
        </div>
      </div>
    </DefaultLayout>
  );
}
