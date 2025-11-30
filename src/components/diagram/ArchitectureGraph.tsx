import ReactFlow, { Background, Controls, MiniMap, type Node, type Edge } from 'reactflow'
import 'reactflow/dist/style.css'
import { useMemo } from 'react'
import { useNavigate } from '@tanstack/react-router'

export function ArchitectureGraph() {
  const navigate = useNavigate()
  const nodes: Node[] = useMemo(
    () => [
      {
        id: 'summary',
        position: { x: 0, y: 0 },
        data: { label: 'Summary' },
        type: 'default',
      },
      {
        id: 'experience',
        position: { x: 220, y: -60 },
        data: { label: 'Experience' },
        type: 'default',
      },
      {
        id: 'skills',
        position: { x: 220, y: 60 },
        data: { label: 'Skills' },
        type: 'default',
      },
      {
        id: 'projects',
        position: { x: 440, y: 0 },
        data: { label: 'Projects' },
        type: 'default',
      },
      {
        id: 'publications',
        position: { x: 660, y: 0 },
        data: { label: 'Publications' },
        type: 'default',
      },
    ],
    []
  )
  const edges: Edge[] = useMemo(
    () => [
      { id: 'e1', source: 'summary', target: 'experience' },
      { id: 'e2', source: 'summary', target: 'skills' },
      { id: 'e3', source: 'experience', target: 'projects' },
      { id: 'e4', source: 'projects', target: 'publications' },
    ],
    []
  )

  return (
    <div className="h-[340px] border rounded-lg bg-card">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={(_, node) => {
          const map: Record<string, string> = {
            summary: '/',
            experience: '/experience',
            skills: '/skills',
            projects: '/projects',
            publications: '/publications',
          }
          const to = map[node.id]
          if (to) navigate({ to })
        }}
        fitView
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  )
}
