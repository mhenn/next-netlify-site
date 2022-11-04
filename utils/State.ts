import create from 'zustand'

interface SiteState {
    visible: boolean
    setVisible: (to: boolean) => void
}

const useStore = create<SiteState>()((set) => ({
    visible: false,
    setVisible: (to) => set(() => ({ visible: to }))

}))

export default useStore
