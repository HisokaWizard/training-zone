import { Grid, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Graph } from './models/graph';
import { useGameState } from './store/general/hooks';
import { dropCube } from './store/general/reducers';
import { useAppDispatch } from './store/hooks';
import { Node } from './models/node';
import { Edge } from './models/edge';

export const ColonialistsGame = () => {
  const dispatch = useAppDispatch();
  const {
    dropCubeResult,
  } = useGameState();

  useEffect(() => {
    createGraph();
  }, [])

  const dropCubes = () => {
    dispatch(dropCube());
  }

  const createGraph = () => {
    const edge1: Edge = {
      nodeKeyPairs: [{
        nodeKeyOne: 'forestOneTop',
        nodeKeyTwo: 'forestOneTopRight',
      }]
    }
    const edge2: Edge = {
      nodeKeyPairs: [{
        nodeKeyOne: 'forestOneTop',
        nodeKeyTwo: 'forestOneTopLeft',
      }]
    }
    const edge3: Edge = {
      nodeKeyPairs: [{
        nodeKeyOne: 'forestOneTopRight',
        nodeKeyTwo: 'forestOneBottomRight',
      }]
    }
    const edge4: Edge = {
      nodeKeyPairs: [{
        nodeKeyOne: 'forestOneTopLeft',
        nodeKeyTwo: 'forestOneBottomLeft',
      }]
    }
    const edge5: Edge = {
      nodeKeyPairs: [{
        nodeKeyOne: 'forestOneBottomLeft',
        nodeKeyTwo: 'forestOneBottom',
      }]
    }
    const edge6: Edge = {
      nodeKeyPairs: [{
        nodeKeyOne: 'forestOneBottomRight',
        nodeKeyTwo: 'forestOneBottom',
      }]
    }
    const node1: Node = {
      name: 'Дерево 1 верх',
      key: 'forestOneTop',
      edgeList: [edge1, edge2]
    }
    const node2: Node = {
      name: 'Дерево 1 верх право',
      key: 'forestOneTopRight',
      edgeList: [edge1, edge3]
    }
    const node3: Node = {
      name: 'Дерево 1 верх лево',
      key: 'forestOneTopLeft',
      edgeList: [edge2, edge4]
    }
    const node4: Node = {
      name: 'Дерево 1 низ право',
      key: 'forestOneBottomRight',
      edgeList: [edge3, edge6]
    }
    const node5: Node = {
      name: 'Дерево 1 низ лево',
      key: 'forestOneBottomLeft',
      edgeList: [edge4, edge5]
    }
    const node6: Node = {
      name: 'Дерево 1 низ',
      key: 'forestOneBottom',
      edgeList: [edge5, edge6]
    }
    const oneCard: Graph = {
      nodes: [node1, node2, node3, node4, node5, node6],
      edges: [edge1, edge2, edge3, edge4, edge5, edge6],
    };
    console.log(oneCard.nodes.find(node => node.key === oneCard.nodes[3].edgeList[1].nodeKeyPairs[0].nodeKeyTwo)) //node6
  }

  return <Grid container spacing={2}>
    <Grid item xs={12}>
      <Typography component='h4' variant='h4'>Colonialists Game</Typography>
    </Grid>
    <Grid item xs={6}>
    <Button color='primary' variant='outlined' onClick={dropCubes}>Drop cubes and get result</Button>
    </Grid>
    <Grid item xs={6}>
      Your result is {dropCubeResult}
    </Grid>
  </Grid>
}