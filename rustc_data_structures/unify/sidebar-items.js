initSidebarItems({"struct":[["Snapshot","At any time, users may snapshot a unification table.  The changes made during the snapshot may either be *committed* or *rolled back*."],["UnificationTable","Table of unification keys and their values."],["VarValue","Value of a unification key. We implement Tarjan's union-find algorithm: when two keys are unified, one of them is converted into a \"redirect\" pointing at the other. These redirects form a DAG: the roots of the DAG (nodes that are not redirected) are each associated with a value of type `V` and a rank. The rank is used to keep the DAG relatively balanced, which helps keep the running time of the algorithm under control. For more information, see <http://en.wikipedia.org/wiki/Disjoint-set_data_structure>."]],"trait":[["Combine","This trait is implemented for unify values that can be combined. This relation should be a monoid."],["UnifyKey","This trait is implemented by any type that can serve as a type variable. We call such variables *unification keys*. For example, this trait is implemented by `IntVid`, which represents integral variables."]]});