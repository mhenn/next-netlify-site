import create from 'zustand'
import produce from 'immer'

interface SiteState {
    visible: object
    setVisible: (key: string, to: boolean) => void
}

const useStore = create<SiteState>()((set) => ({
    visible: {},
    setVisible: (key, to) => set(produce(state => {state.visible[key] = to}))
}))

export default useStore
